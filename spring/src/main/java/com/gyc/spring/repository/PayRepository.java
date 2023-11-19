package com.gyc.spring.repository;

import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Pay;

@Repository
public interface PayRepository extends BaseRepository<Pay> {

   Pay findByEventoId(Long eventoId);
}

