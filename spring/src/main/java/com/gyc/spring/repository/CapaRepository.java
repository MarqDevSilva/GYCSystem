package com.gyc.spring.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Capa;

@Repository
public interface CapaRepository extends BaseRepository<Capa> {

    Optional<Capa> findByEventoId (Long id);
}
