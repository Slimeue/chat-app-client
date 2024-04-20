"use client"
import { Box, Menu, MenuItem, TextInput, Button, ActionIcon } from "@mantine/core";
import { FC, SetStateAction, useState } from "react";
import { getAuthUser } from "@/app/utils/helper";
import { useForm } from "@mantine/form";
import { CreateMessageInput, useCreateMessageMutation } from "../../../../../lib/types/apolloComponents";
import { IconCirclePlus, IconGif, IconMoodSmile, IconSticker } from "@tabler/icons-react";
import EmojiPicker , {Emoji} from "emoji-picker-react";

interface IProps {
  receiverId: string;
}

const InputMessage: FC<IProps> = ({ receiverId }) => {
  const user = getAuthUser();
  const [createMessage] = useCreateMessageMutation();
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
    form.reset();
  };

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  function onClick(emojiData: { unified: SetStateAction<string>; }) {
    setSelectedEmoji(emojiData.unified);
  }


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!showPicker) {
      form.onSubmit(handleSubmit)(e);
    }
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "var(--mantine-spacing-md)",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            position: "relative",
          }}
          onSubmit={handleFormSubmit}
        >

          <TextInput
            id="content"
            className="w-full"
            {...form.getInputProps("content")}
            leftSection={<IconCirclePlus size={24} 
            />}
 
          />
          <div
            style={{
              display: "flex",
              gap: "8px",
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <IconGif size={24} />
            <IconSticker size={24} />
            <ActionIcon
              onClick={() => setShowPicker(!showPicker)}
            >
              <IconMoodSmile size={24}  />
            </ActionIcon>
          </div>
          {showPicker && (
            <div style={{ position: "absolute", bottom: "40px", right: "10px" }}>
              <EmojiPicker onEmojiClick={onClick} />
            </div>
          )}
        </form>
      </Box>
    </>
  );
};

export default InputMessage;
