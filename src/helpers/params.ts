export const getParams = () => {
	const params = new URLSearchParams(window.location.search);
	let titleParams = params.get('title');
	let descriptionParams = params.get('description');
	let stateParams = params.get('state');	
	let startDateParams = params.get('startDate');
	let endDateParams = params.get('endDate');
	let idParams = params.get('id')
	
    return {titleParams, descriptionParams, stateParams,startDateParams, endDateParams, idParams }
}
    
    