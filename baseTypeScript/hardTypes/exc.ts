interface  Payment {
    sum:number,
    from:number,
    to:number
}
interface IRequest extends Payment {}
enum PaymentStatus{
    Success = "Success",
    Failed = "Failed"
}
interface IDataSuccess extends Payment{
    "databaseId":number,
}
interface Failed {
    "errorMessage":string;
    "errorCode":number;
}
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess
}
interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: Failed
}
