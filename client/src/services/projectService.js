import http from "./httpService";

export function getOwnerProjectsApi(data){
    return http.get("/project/owner-projects", data).then(({data})=> data.data);
}

export function RemoveProjectApi(id){
    return http.delete(`/project/${id}`).then(({data})=> data.data);
}

export function CreateProjectApi(data){
    return http.post("/project/add", data).then(({data})=> data.data);
}

export function editProjectApi({id, newProject}){
    return http.patch(`/project/update/${id}`, newProject).then(({data})=> data.data);
}

export function toggleProjectStatusApi({id, data}){
    return http.patch(`/project/${id}`, data).then(({data})=> data.data);
}

export function getProjectApi(id){
    return http.get(`/project/${id}`).then(({data})=> data.data);
}

export function getProjectsApi(qs){
    return http.get(`/project/list${qs}`).then(({data})=> data.data);
}