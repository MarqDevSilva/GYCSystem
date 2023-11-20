package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Hospedagem extends BaseEntity{
    
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    @Column(length = 300, nullable = false)
    private String descricao;

    @Column(length = 100, nullable = false)
    private String lotacao;

    @Column(length = 100, nullable = false)
    private String categoria;

    @Column(length = 100)
    private String valor;
}
