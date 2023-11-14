package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Evento extends BaseEntity{

    @Column(length = 200, nullable = false)
    private String nomeEvento;

    @Column(length = 100, nullable = false)
    private Short maxInscricoes;

    @Column(length = 100, nullable = false)
    private String whatsapp;

    @Column(length = 100, nullable = false)
    private String dataInicial;

    @Column(length = 100, nullable = false)
    private String dataFinal;

    @Column(length = 100, nullable = false)
    private String status;

    @JsonIgnore
    @OneToOne(mappedBy = "evento")
    private Pay pay;
}
