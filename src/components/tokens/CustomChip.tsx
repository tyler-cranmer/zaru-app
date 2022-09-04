import { Chip, Box } from "@mui/material"
import Image from "next/image"


export const CustomChip = (props: { src: string, height: number, width:number, name: string, alt:string }) => {
    return (
      <>
            <Chip  avatar={<Image alt={props.alt} src={props.src} height={props.height} width={props.width} />} label={props.name} />
      </>
    );
}

export const tokenSelector = () => {
  return (
    <>
    <Box>
        

    </Box>
    </>
  )
}