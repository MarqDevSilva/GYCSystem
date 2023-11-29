package com.gyc.spring.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Sobre;

@Repository
public interface SobreRepository extends BaseRepository<Sobre> {

    Optional<Sobre> findByEventoId (Long id);

}