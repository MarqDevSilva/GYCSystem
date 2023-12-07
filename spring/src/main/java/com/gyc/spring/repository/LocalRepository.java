package com.gyc.spring.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Local;

@Repository
public interface LocalRepository extends BaseRepository<Local> {

    Optional<Local> findByEventoId (Long id);
}
