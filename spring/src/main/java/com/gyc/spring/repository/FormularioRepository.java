package com.gyc.spring.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Formulario;

@Repository
public interface FormularioRepository extends BaseRepository<Formulario> {

    List<Formulario> findByEventoId(Long id);
}
