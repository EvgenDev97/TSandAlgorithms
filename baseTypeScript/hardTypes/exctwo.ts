interface  IPayload {
    sum:number;
    from: number;
    to:number;
}
enum PayloadStatus {
    Success ="success",
    Failed = "failed"
}
interface SuccessData extends  IPayload{
    dataBaseId:number
}
interface ErrorData {
    errorMsg:string,
    errorCode:number
}
interface Success {
    status:PaymentStatus.Success
    data: SuccessData
}
interface FailedData {
    status:PayloadStatus.Failed,
    data:ErrorData
}