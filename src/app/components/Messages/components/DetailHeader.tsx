import { Group, UnstyledButton, Text, Avatar } from "@mantine/core"
import { IconChevronLeft, IconChevronRight, IconDots, IconMessageReport, IconPhone, IconPhoneCall, IconReport, IconVideo } from "@tabler/icons-react"
import { FC } from "react"

interface Props {

}
const DetailHeader: FC<Props> = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: 20, }}>
            <UnstyledButton>
                <IconChevronLeft size={30}/>
            </UnstyledButton>

        </div>
    )
}
export default DetailHeader