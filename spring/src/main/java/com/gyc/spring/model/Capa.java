package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Capa extends BaseEntity {
    
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    private String titulo;

    private Byte[] capa;
}