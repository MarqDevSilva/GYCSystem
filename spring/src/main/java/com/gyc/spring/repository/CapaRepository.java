package com.gyc.spring.repository;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Capa;

@Repository
public interface CapaRepository extends BaseRepository<Capa> {

    Capa findByEventoId (Long id);
}
