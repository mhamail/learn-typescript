// const ApprovalStatus = {
//     draft: "draft",
//     submitted: "submitted",
//     approved: "approved",
//     rejected: "rejected"
// };

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}
console.log(ApprovalStatus)
