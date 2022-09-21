package com.generation.hogh.services;

import org.springframework.stereotype.Service;

import com.generation.hogh.models.UsuarioModels;
import com.generation.hogh.repository.UsuarioRepository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
@Service

public class UsuarioServices {
	@Autowired
	
	UsuarioRepository usuariorepository;
	
	 public ArrayList<UsuarioModels> obtenerUsuario(){
		 return (ArrayList<UsuarioModels>) usuariorepository.findAll();
		 }
	 public UsuarioModels guardarUsuario(UsuarioModels usuario){
	        return usuariorepository.save(usuario);
	    }
	 public Optional<UsuarioModels> obtenerPorId(Long id){
	        return usuariorepository.findById(id);
	    }
	 public ArrayList<UsuarioModels>  obtenerPorPrioridad(Integer prioridad) {
	        return usuariorepository.findByPrioridad(prioridad);
	    }
	 public boolean eliminarUsuario(Long id) {
	        try{
	            usuariorepository.deleteById(id);
	            return true;
	        }catch(Exception err){
	            return false;
	        }
	    }
	 
};

