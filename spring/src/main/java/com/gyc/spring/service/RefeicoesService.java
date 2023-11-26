package com.gyc.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.RefeicoesDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.RefeicoesMapper;
import com.gyc.spring.model.Refeicoes;
import com.gyc.spring.repository.RefeicoesRepository;

@Service
public class RefeicoesService extends BaseService<Refeicoes, RefeicoesDTO> {

    @Autowired
    private RefeicoesRepository refRepository;

    public RefeicoesService(RefeicoesRepository repository, RefeicoesMapper mapper){
        super(repository, mapper);
    }

    public List<RefeicoesDTO> findByEvento(Long id){
        List<Refeicoes> list = refRepository.findByEventoId(id);
        return mapper.toDto(list);
    }

    public List<RefeicoesDTO> findByData(String data){
        List<Refeicoes> list = refRepository.findByData(data);
        return mapper.toDto(list);
    }

    public RefeicoesDTO update(Long id, RefeicoesDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }

    
}
