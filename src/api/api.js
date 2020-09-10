import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "41411335-a81e-4e6c-b141-dfbf9e97db0e"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Absolute method.Please use profileAPI object.')
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status});
    },
    savePhoto(photoFile){
        const formData=new FormData();
        formData.append("image",photoFile)
        return instance.put(`profile/photo`,formData,{ 
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`,profile);
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout(email,password,rememberMe=false){
        return instance.delete(`auth/login`);
    }
}