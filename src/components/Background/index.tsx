import { StyledBackground } from "./style"

type BackgroundType = {
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export function Background({children, ...props}: BackgroundType) {
    return(
        <StyledBackground>
            {children}
        </StyledBackground>
    )  
}