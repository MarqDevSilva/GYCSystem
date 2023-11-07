package com.gyc.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gyc.spring.model.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, String>{
    
}
