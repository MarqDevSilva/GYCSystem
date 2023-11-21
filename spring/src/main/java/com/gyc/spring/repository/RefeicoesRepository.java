package com.gyc.spring.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Refeicoes;

@Repository
public interface RefeicoesRepository extends BaseRepository<Refeicoes> {

    List<Refeicoes> findByEventoId(Long id);
    List<Refeicoes> findByData(String data);
}
