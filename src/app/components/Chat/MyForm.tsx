import { useForm } from "@mantine/form";
import {
  CreateMessageInput,
  useCreateMessageMutation,
} from "../../../../lib/types/apolloComponents";
import { send } from "process";

export const MyForm = () => {
  const [createMessage, { data, loading, error }] = useCreateMessageMutation();
  const form = useForm({
    initialValues: {
      content: "",
      senderId: "",
      receiverId: "",
    },
  });
  const handleSubmit = async (values: CreateMessageInput) => {
    console.log(values);
    createMessage({
      variables: {
        input: values,
      },
    });
  };
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <input
          type="text"
          name="content"
          id="content"
          {...form.getInputProps("content")}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
