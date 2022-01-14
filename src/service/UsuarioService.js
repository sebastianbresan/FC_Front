import http from "../http-common";

class UsuarioService {
  findAll() {
    return http.get("/usuario/find/findall");
  }

  findById = (id) => {
    return http.get(`/usuario/find/findbyid/${id}`);
  };

  findByEmail = (email) => {
    return http.get(`/usuario/find/findbyemail/${email}`);
  };

  create(usuario) {
    return http.post("/usuario/save", usuario);
  }

  login(usuario) {
    return http.post("/login", usuario);
  }

  update(data) {
    return http.put("/usuario/update", data);
  }

  delete(id) {
    return http.delete(`/usuario/delete/deletebyid/${id}`);
  }

  deleteAll() {
    return http.delete("/usuario/delete/deleteall");
  }
}

export default new UsuarioService();
