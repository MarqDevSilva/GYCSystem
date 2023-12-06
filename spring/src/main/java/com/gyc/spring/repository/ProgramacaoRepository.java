package com.gyc.spring.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Programacao;

@Repository
public interface ProgramacaoRepository extends BaseRepository<Programacao> {

    List<Programacao> findByEventoId(Long id);
}