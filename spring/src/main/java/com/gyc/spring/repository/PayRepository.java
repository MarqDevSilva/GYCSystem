package com.gyc.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Pay;

@Repository
public interface PayRepository extends JpaRepository<Pay, Long> {

   Pay findByEventoId(Long eventoId);
}

