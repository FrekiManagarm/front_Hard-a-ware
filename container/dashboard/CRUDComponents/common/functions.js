import PatchAPIData from '../../../../helpers/patch_api_data';
import DeleteAPIData from '../../../../helpers/delete_api_data';

export const modifyComponent = async (data, endpoint) => {
    const response = await PatchAPIData(endpoint, data)
    console.log(response, 'response patch API LLAAAA')
}

export const deleteComponent = async (endpoint) => {
    const response = await DeleteAPIData(endpoint);
    console.log(response, 'response delete API LLLLAAA')
}