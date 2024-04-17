import { Box, Button, Input } from "@mantine/core"
import { IoIosArrowForward } from "react-icons/io"

  import { FC } from "react";
  import { getAuthUser } from "@/app/utils/helper";
import { useForm } from "@mantine/form";
import { CreateMessageInput, useCreateMessageMutation } from "../../../../lib/types/apolloComponents";
  
  interface IProps {
    receiverId: string;
  }
const InputMessage: FC<IProps> = (props) => {
    const { receiverId } = props;
    const user = getAuthUser();
    const [createMessage, { data, loading, error }] = useCreateMessageMutation();
    const form = useForm<CreateMessageInput>({
      initialValues: {
        content: "",
        receiverId: "",
        senderId: "",
      },
    });
    const handleSubmit = (values: CreateMessageInput) => {
      createMessage({
        variables: {
          input: {
            content: values.content,
            receiverId,
            senderId: user?.id || "",
          },
        },
      });
    };
        return (
        <>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 'var(--mantine-spacing-md)',
                    borderTop: '1px solid #e0e0e0' 
                }}
            >
                <form
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                    }}
                    onSubmit={form.onSubmit(handleSubmit)}
                >
                    <Input
                        id="content"
                        className="w-full pr-3"
                        {...form.getInputProps("content")}
                    />
                    <Button type="submit">
                        <IoIosArrowForward />
                    </Button>
                </form>
            </Box>
        </>
    )
}
export default InputMessage