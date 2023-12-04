package com.gyc.spring.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Palestrantes;

@Repository
public interface PalestranteRepository extends BaseRepository<Palestrantes> {

   List <Palestrantes> findByEventoId(Long id);
}
