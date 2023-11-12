package com.gyc.spring.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gyc.spring.dto.EventoDTO;
import com.gyc.spring.dto.PayDTO;
import com.gyc.spring.model.Evento;
import com.gyc.spring.service.PayService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/pay")
public class PayController {

    private final PayService service;

    @GetMapping
    public ResponseEntity<List<PayDTO>> listarTodos() {
        return ResponseEntity.ok(service.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PayDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorID(id));
    }

    @PostMapping
    public ResponseEntity<PayDTO> salvar(@RequestBody PayDTO entity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveDTO(entity));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PayDTO> atualizar(@PathVariable Long id, @RequestBody PayDTO entity) {
        return ResponseEntity.ok(service.atualizar(id, entity));
    }

    //Método não utilizado
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}