import http from "../http-common";

class UsuarioService {
  findAll() {
    return http.get("/usuario/find/findall", {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  findById = (id) => {
    return http.get(`/usuario/find/findbyid/${id}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  findByEmail = (email) => {
    
    return http.get(`/usuario/find/findbyemail/${email}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  create(usuario) {
    return http.post("/usuario/save", usuario, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  login(usuario) {
    return http.post("/login", usuario);
  }

  update(data) {
    return http.put("/usuario/update", data, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  delete(id) {
    return http.delete(`/usuario/delete/deletebyid/${id}`, {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

  deleteAll() {
    return http.delete("/usuario/delete/deleteall", {
      headers: {
        Authorization: `Bearer `+sessionStorage.getItem('token'),
      }});
  };

}

export default new UsuarioService();
