package com.gyc.spring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.CancelamentoDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.CancelamentoMapper;
import com.gyc.spring.model.Cancelamento;
import com.gyc.spring.model.Pay;
import com.gyc.spring.repository.CancelamentoRepository;

@Service
public class CancelamentoService extends BaseService<Cancelamento, CancelamentoDTO> {

    @Autowired
    private CancelamentoRepository cancelRepository;

    public CancelamentoService(CancelamentoRepository repository, CancelamentoMapper mapper){
        super(repository, mapper);
    }

    public Optional<CancelamentoDTO> findByEvento(Long id){
        Optional<Cancelamento> optional = cancelRepository.findByEventoId(id);
        return optional.map(mapper::toDto);
    }

    public CancelamentoDTO update(Long id, CancelamentoDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
