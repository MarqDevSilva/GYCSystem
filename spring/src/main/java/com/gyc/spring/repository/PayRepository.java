package com.gyc.spring.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Pay;

@Repository
public interface PayRepository extends BaseRepository<Pay> {

   Optional<Pay> findByEventoId(Long eventoId);
}

