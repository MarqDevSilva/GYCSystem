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

import com.gyc.spring.dto.RefeicoesDTO;
import com.gyc.spring.service.RefeicoesService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/refeicoes")
public class RefeicoesController {

    private final RefeicoesService service;

    @GetMapping
    public ResponseEntity<List<RefeicoesDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<RefeicoesDTO>>findByEvento(@PathVariable Long id) {
        return ResponseEntity.ok(service.findByEvento(id));
    }

    @GetMapping("data/{data}")
    public ResponseEntity<List<RefeicoesDTO>>findByData(@PathVariable String data) {
        return ResponseEntity.ok(service.findByData(data));
    }

    @PostMapping
    public ResponseEntity<List<RefeicoesDTO>> saveAll(@RequestBody List<RefeicoesDTO> dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveAll(dto));
    }

    @PutMapping()
    public ResponseEntity<List<RefeicoesDTO>> updateAll(@RequestBody List<RefeicoesDTO> dtoList) {
        return ResponseEntity.ok(service.updateAll(dtoList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RefeicoesDTO> update(@PathVariable Long id, @RequestBody RefeicoesDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
