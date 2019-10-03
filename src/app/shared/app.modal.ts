export interface IData {
    id : number
    description: string
    sessions: ISession[]
}

export interface ISession
{
    transactionTypeCode: string //TYPE
    description:string
    percentMatch: number
}
