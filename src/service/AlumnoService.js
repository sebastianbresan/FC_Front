import http from "../http-common";

class AlumnoService {
  findAll() {
    return http.get("/alumno/find/findall");
  }

  findById = (id) => {
    return http.get(`/alumno/find/findbyid/${id}`);
  };

  findByEmail = (email) => {
    return http.get(`/alumno/find/findbyemail/${email}`);
  };

  create(email, alumno) {
    return http.post(`/alumno/save/${email}`, alumno);
  }

  login(alumno) {
    return http.post("/login", alumno);
  }

  update(data) {
    return http.put("/alumno/update", data);
  }

  delete(id) {
    return http.delete(`/alumno/delete/deletebyid/${id}`);
  }

  deleteAll() {
    return http.delete("/alumno/delete/deleteall");
  }

  deleteallbyuser(alumnosToDelete) {
    return http.post("alumno/delete/deleteallbyuser", alumnosToDelete);
  }
}

export default new AlumnoService();
