package com.gyc.spring.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Evento {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String nomeEvento;

    @Column(length = 100, nullable = false)
    private Short maxInscricoes;

    @Column(length = 100, nullable = false)
    private String whatsapp;

    @Column(length = 100, nullable = false)
    private Date dataInicial;

    @Column(length = 100, nullable = false)
    private Date dataFinal;
}
