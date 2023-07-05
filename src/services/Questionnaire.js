import Api from "@/utils/axios.js";
//  let token = localStorage.getItem('token')
const Questionnaire = {
    deleteQuestion : async (data,id) => {
        return await Api({
            url: `/api/admin/question/${id}/`,
            method: 'DELETE',
            data,
        }).then(res => {
            return res.data
        })
    },
    getSingleQuestionnaire: async (id) => {
        console.log('injs',id);
        return await Api({
          url: `/api/admin/questionnaire/${id}/`,
          method: 'GET',
        }).then((res) => {
          return res.data
        })
      }
    ,
    getAllQuestionnaire: async (count) => {
        return await Api({
          url: `/api/admin/questionnaire/?page=${count}&s=false`,
          method: 'GET',
        }).then((res) => {
          return res.data.results
        })
      }
    ,
    deleteQuestionnaire: async (data) => {
        return await Api({
            url: `/api/admin/questionnaire/${data}/`,
            method: 'DELETE',
            data,
        }).then(res => {
            return res.data
        })
    }
    ,
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
     sendChoices: async (data) => {
        return await Api({
            url: '/api/admin/choice/',
            method: 'post',
            data,
        }).then(res => {
            return res.data
        })
    },
    getAllQuestion : async (data)=>{
        console.log('ddddddddddddddddddddddddddddddddd',data);
        return await Api({
            url: `/api/admin/question/?questionnaire=${data}`,
            method: 'GET',
            
        }).then(res => {
            
            return res.data
        })
    }
  

}

export default Questionnaire
