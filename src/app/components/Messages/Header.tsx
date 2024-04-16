import { Group } from "@mantine/core"
import { IconChevronRight, IconDots, IconMessageReport, IconPhone, IconPhoneCall, IconReport, IconVideo } from "@tabler/icons-react"
import { FC } from "react"

interface Props {

}
const Header: FC<Props> = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottom: '1px solid #e0e0e0' }}>
           <Group
            style={{display:'flex', gap: 5}}>
           <h1>Sample</h1>
           <IconChevronRight size={24}
                    strokeWidth={2}
                    color={'black'} />
           </Group>
            <Group
                style={{display:'flex', gap: 10}}>
                <IconPhone size={24}
                    strokeWidth={2}
                    color={'black'} />
                <IconVideo size={24}
                    strokeWidth={2}
                    color={'black'} />
                <IconMessageReport size={24}
                    strokeWidth={2}
                    color={'black'} />
            </Group>

        </div>
    )
}
export default Header