export enum CardVariant{
    otlined = "outlined",
    primary = "primary"
}

interface CardProps{
    width: string;
    height: string;
    children?: React.ReactNode;
    variant: CardVariant;
    onClick?: () => void;
}

function Card({width, height, children, variant, onClick}: CardProps){
    return(
        <div style={{ width, height,  margin: "20px",
            border: variant === CardVariant.otlined ? "2px solid red" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
         }} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;