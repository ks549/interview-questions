
export const Selectuser = (users)=>{


return {
	type: "USER_SELECT",
	payload: users
}
};

export const SelectCompany = (company)=>{


return {
	type: "COMPANY_SELECT",
	payload: company
}
};