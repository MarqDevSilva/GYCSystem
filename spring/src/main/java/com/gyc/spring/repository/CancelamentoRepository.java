package com.gyc.spring.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Cancelamento;

@Repository
public interface CancelamentoRepository extends BaseRepository<Cancelamento>{

    Optional<Cancelamento> findByEventoId(Long id);
}
