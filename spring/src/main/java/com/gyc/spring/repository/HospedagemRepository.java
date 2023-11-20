package com.gyc.spring.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Hospedagem;

@Repository
public interface HospedagemRepository extends BaseRepository<Hospedagem> {

    List<Hospedagem> findByEventoId(Long id);
}
