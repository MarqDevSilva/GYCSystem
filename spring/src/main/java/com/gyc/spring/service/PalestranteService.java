package com.gyc.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.PalestranteDTO;
import com.gyc.spring.dto.RefeicoesDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.PalestrantesMapper;
import com.gyc.spring.model.Palestrantes;
import com.gyc.spring.model.Refeicoes;
import com.gyc.spring.repository.PalestranteRepository;

@Service
public class PalestranteService extends BaseService<Palestrantes, PalestranteDTO> {

    @Autowired
    private PalestranteRepository palestranteRepository;

    public PalestranteService(PalestranteRepository repository, PalestrantesMapper mapper){
        super(repository, mapper);
    }

    public List<PalestranteDTO> findByEvento(Long id){
        List<Palestrantes> list = palestranteRepository.findByEventoId(id);
        return mapper.toDto(list);
    }

    public PalestranteDTO update(Long id, PalestranteDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
