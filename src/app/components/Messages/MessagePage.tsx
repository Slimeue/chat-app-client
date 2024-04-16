"use client"
import { Group, ScrollArea } from "@mantine/core"
import { useState } from "react";

import InputMessage from "./InputMessage";
import Header from "./Header";

const MessagePage = () => {
    return (
        <div  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <Header />
            <div className="flex-1 overflow-auto p-5">
              
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus quis urna tempor posuere.
                        Phasellus eget mi non ex dapibus posuere sit amet id leo. Fusce id tortor enim. Integer ac dui
                        rhoncus, vehicula risus in, fermentum enim. Sed at justo at dui gravida sollicitudin. Ut volutpat,
                        est quis volutpat rutrum, nulla lorem gravida elit, vel tincidunt nisl orci nec turpis. In aliquet,
                        metus ut ultricies vestibulum, sem felis venenatis dolor, ac interdum mauris ipsum sed libero.
                        Vivamus sollicitudin sem id massa consequat tincidunt. Curabitur volutpat felis non lorem
                        sollicitudin vehicula. Donec vulputate vestibulum metus, non dictum dolor ultricies id.
                        Mauris quis est quis ex hendrerit tempor. Sed vitae est nec ex aliquet scelerisque.
                        Nullam accumsan tincidunt leo at interdum. Donec ac elit id neque fermentum tempor.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Sed id interdum mi, ac aliquet nisi. Ut tincidunt massa odio, nec laoreet justo interdum at.
                        Vivamus tincidunt lorem sed nunc consectetur, sed malesuada nisl tempor. Nulla facilisi.
                        Integer eget purus nec arcu pharetra feugiat. In vehicula leo id mi dapibus volutpat.
                        Fusce ut eleifend urna, eu ultricies purus. Nullam at tellus vel orci feugiat rhoncus.
                        Integer convallis, lectus in dignissim posuere, mauris mi lacinia justo, et luctus magna dui
                        nec lectus. Aenean dapibus urna tortor, et fermentum sem rutrum sed. Pellentesque suscipit
                        libero sit amet nisi consequat, id ultrices velit ullamcorper. Integer ut libero eu ex
                        porttitor eleifend. Mauris dapibus, risus sit amet rhoncus egestas, lacus odio tincidunt
                        nulla, non auctor quam nisi eu magna. Donec quis augue rutrum, pharetra mauris a,
                        finibus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                        curae; Nulla aliquam est nec nulla finibus, non condimentum nunc finibus. Nullam vestibulum,
                        orci quis condimentum tristique, odio lectus laoreet tortor, nec aliquet elit mi vel arcu.
                        Integer ullamcorper auctor lorem, ut faucibus risus faucibus sed. Curabitur bibendum,
                        quam sit amet aliquet varius, mauris ligula mattis quam, nec dignissim felis libero vel
                        justo. Sed nec felis ac nibh iaculis finibus. In eget semper risus. In hac habitasse
                        platea dictumst. Nullam vel neque nec dolor luctus vestibulum. Vivamus feugiat suscipit
                        justo, eget dapibus lorem mollis a. Maecenas tempus tincidunt tortor, eget maximus
                        quam volutpat nec. Integer dictum magna justo, id hendrerit felis ultricies sit amet.
                        Praesent ultricies interdum sem eu feugiat. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia curae; Vestibulum vel eros sed ipsum consequat
                        bibendum sit amet quis est. Integer nec elit nulla. Duis id metus ac ligula vehicula
                        congue. Aliquam erat volutpat. Sed venenatis tempus risus sit amet aliquet. In hac
                        habitasse platea dictumst. Nam nec orci eros. Fusce posuere mauris ac tellus dictum,
                        id ultricies lectus efficitur. Cras tincidunt velit sit amet posuere mattis. Aliquam
                        erat volutpat. Ut vel risus turpis. In hac habitasse platea dictumst. Etiam vehicula,
                        libero a pellentesque lacinia, ipsum mauris pharetra urna, ut dignissim ipsum sapien
                        non eros. Integer vehicula feugiat leo, nec aliquam lorem gravida vitae. Aliquam
                        molestie aliquam justo vitae dapibus. Nam eget sem vehicula, placerat nulla vitae,
                        posuere metus. Aliquam vel pretium felis. Mauris vitae felis vitae leo fringilla
                        commodo. Proin et consequat eros, nec volutpat justo. Proin auctor augue at dui
                        consequat ultrices. Donec fermentum sem in vestibulum euismod. Duis gravida purus
                        magna, eget condimentum velit ullamcorper et. Ut dapibus odio justo, vel cursus nunc
                        vestibulum id. Suspendisse potenti. Fusce placerat nulla id pharetra condimentum.
                        Nullam aliquet quam id eros euismod volutpat. Vivamus ut est mauris. Vestibulum
                        volutpat aliquet bibendum. Ut in turpis at est venenatis fringilla. Vestibulum
                        tempor auctor odio, et venenatis libero accumsan at. Morbi pretium orci sit amet
                        consequat efficitur. Suspendisse potenti. Cras id malesuada lacus, in congue
                        velit. Mauris ac magna non nisl posuere convallis. Vivamus eget magna id nisl
                        dapibus suscipit ac sed arcu. Aenean interdum euismod libero at iaculis. Mauris
                        fermentum ligula vitae eros tempus malesuada. In hac habitasse platea dictumst.
                        Fusce laoreet eleifend risus, in laoreet metus suscipit at. Sed varius, ex vitae
                        dignissim lobortis, purus nunc malesuada libero, vel ullamcorper elit lacus at
                        justo. Integer dapibus elit at turpis dictum auctor. Pellentesque volutpat lacinia
                        dui non fermentum. Integer vel volutpat sapien. Fusce condimentum turpis nisi,
                        vel gravida orci aliquet ut. Integer quis lorem nec magna laoreet lacinia.</p>
            
            </div>
            <InputMessage />
        </div>

    )
}
export default MessagePage