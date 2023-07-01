import Api from "@/utils/axios.js";

const auth = {
    login: async (data) => {
        return await Api({
            url: '/api/login/',
            method: 'post',
            data
        }).then(res => {
            return res.data
        })
    },
    // register: async (data, headers) => {
    //     return await Api({
    //         url: '/Authentication/register',
    //         method: 'post',
    //         data,
    //         headers
    //     }).then(res => {
    //         return res.data
    //     })
    // }

}

export default auth
