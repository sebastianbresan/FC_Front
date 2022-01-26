import http from "../http-common";

class AlumnoService {
  findAll() {
    return http.get("/alumno/find/findall");
  }

  findAllWithoutUser() {
    return http.get("/alumno/find/findallwithoutuser", {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  findById = (id) => {
    return http.get(`/alumno/find/findbyid/${id}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  findByEmail = (email) => {
    return http.get(`/alumno/find/findbyemail/${email}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  create(email, alumno) {
    return http.post(`/alumno/save/${email}`, alumno, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  updateByEmail(email, id) {
    return http.put(`/alumno/update/${id}`, email, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  delete(id) {
    return http.delete(`/alumno/delete/deletebyid/${id}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  deleteAll() {
    return http.delete("/alumno/delete/deleteall", {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  deleteallbyuser(email) {
    return http.delete(`alumno/delete/deleteallbyuser/${email}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  update(data) {
    return http.put("/alumno/update/", data, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };



}

export default new AlumnoService();
