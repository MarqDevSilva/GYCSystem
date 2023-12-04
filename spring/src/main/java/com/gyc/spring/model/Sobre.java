package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Sobre extends BaseEntity {
   
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    @Column(nullable = false)
    private Boolean habilitado;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private Character background;
}
