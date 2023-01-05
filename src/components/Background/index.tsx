import { StyledBackground } from "./style"
import { BackgroundType } from "./entities"

export function Background({children, ...props}: BackgroundType) {
    return(
        <StyledBackground>
            {children}
        </StyledBackground>
    )  
}