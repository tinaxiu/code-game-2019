export interface IData {
    id : number
    description: string
    sessions: ISession[]
}

export interface ISession
{
    id: number
    SKU: number
    Percentage: number
    transactionYtpeCode: string //TYPE
    isSelected:boolean

}