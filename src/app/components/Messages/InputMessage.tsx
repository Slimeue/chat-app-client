import { Box, Button, Input } from "@mantine/core"
import { IoIosArrowForward } from "react-icons/io"

const InputMessage = () => {

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
                >
                    <Input
                        id="content"
                        className="w-full pr-3"
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