package com.gyc.spring.repository;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Cancelamento;

@Repository
public interface CancelamentoRepository extends BaseRepository<Cancelamento>{

    Cancelamento findByEventoId(Long id);
}
