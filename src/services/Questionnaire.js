import Api from "@/utils/axios.js";
//  let token = localStorage.getItem('token')
const Questionnaire = {
    createQuestionnaire: async (data) => {
        return await Api({
            url: '/api/admin/questionnaire/',
            method: 'post',
            data,
        }).then(res => {
            return res.data
        })
    },
    createQuestion : async (data) => {
        return await Api({
            url: '/api/admin/question/',
            method: 'post',
            data,
        }).then(res => {
            return res.data
        })
    },
  

}

export default Questionnaire
