interface Props{
    text : string
    settings: any
    onConfirmClick(text : string) : void
    log: (message: string) => boolean
}

export default Props;
